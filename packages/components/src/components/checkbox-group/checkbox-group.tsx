/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Component, h, Host, Listen, Element, State } from '@stencil/core';
import { CheckboxState, objDiffer } from './utils/utils';

@Component({
  tag: 'scale-checkbox-group',
  styleUrl: './checkbox-group.css',
  shadow: true,
})
export class CheckboxGroup {
  initialLoad: boolean = true;
  @State() groupStatus: CheckboxState[] = [];
  @Element() hostElement: HTMLElement;
  @Listen('scaleChange')
  scaleChangeHandler() {
    this.setGroupStatusState();
  }

  componentDidLoad() {
    this.setGroupStatusState();
  }

  setGroupStatusState() {
    const checkboxes = Array.from(
      this.hostElement.querySelectorAll('scale-checkbox')
    );
    const newState: CheckboxState[] = [];
    for (let i = 0; i < checkboxes.length; i++) {
      newState[i] = {
        id: checkboxes[i].inputId,
        checked: checkboxes[i].checked,
        disabled: checkboxes[i].disabled ? checkboxes[i].disabled : false,
        indeterminate: checkboxes[i].indeterminate,
      };
    }
    if (!newState[0].disabled) {
      // initial Loading
      if (this.initialLoad) {
        this.setMasterCheckBoxState(newState);
        this.initialLoad = false;
      }
      // not initial Loading
      else if (this.initialLoad === false) {
        // sub has been changed
        if (this.checkForSubCheckboxChange(newState)) {
          this.setMasterCheckBoxState(newState);
        }
        // master has been changed
        else {
          this.checkForMasterCkeckboxChange(newState);
        }
      }
    } else {
      this.setMasterCheckBoxState(newState);
      this.handleMasterDisableProp();
    }
  }

  handleMasterDisableProp() {
    const checkboxes = this.hostElement.querySelectorAll('scale-checkbox');
    // set all subs to disabled
    for (let i = 1; i < checkboxes.length; i++) {
      checkboxes[i].setAttribute('disabled', 'true');
    }
    this.setChanges();
  }

  checkForMasterCkeckboxChange(newState: CheckboxState[]) {
    const checkboxes = this.hostElement.querySelectorAll('scale-checkbox');
    // set master and subs to checked
    if (this.groupStatus[0].indeterminate || !this.groupStatus[0].checked) {
      for (let i = 1; i < checkboxes.length; i++) {
        if (!newState[i].disabled) {
          checkboxes[i].setAttribute('checked', 'true');
          checkboxes[i].removeAttribute('indeterminate');
        }
      }
      this.setChanges();
    }
    // set master and subs to empty
    else if (this.groupStatus[0].checked) {
      for (let i = 1; i < checkboxes.length; i++) {
        if (!newState[i].disabled) {
          checkboxes[i].removeAttribute('checked');
          checkboxes[i].removeAttribute('indeterminate');
        }
      }
      this.setChanges();
    }
  }

  checkForSubCheckboxChange(newState: CheckboxState[]) {
    const [, ...subOld] = this.groupStatus;
    const [, ...subNew] = newState;

    // console.log('restOld', subOld)
    // console.log('restNew', subNew)
    if (objDiffer(subOld, subNew)) {
      return true;
    }
  }

  setMasterCheckBoxState(newState: CheckboxState[]) {
    let checkedCounter = 0;
    let disabledCounter = 0;
    for (let i = 1; i < newState.length; i++) {
      if (!newState[i].disabled) {
        if (newState[i].checked) {
          checkedCounter += 1;
        }
      } else if (newState[i].disabled) {
        disabledCounter += 1;
      }
    }
    const checkboxes = this.hostElement.querySelectorAll('scale-checkbox');

    // set master to checked
    if (checkedCounter + disabledCounter === newState.length - 1) {
      checkboxes[0].setAttribute('checked', 'true');
      checkboxes[0].removeAttribute('indeterminate');
      this.setChanges();
    }
    // set master to indeterminate
    else if (
      checkedCounter + disabledCounter < newState.length &&
      checkedCounter !== 0
    ) {
      checkboxes[0].setAttribute('indeterminate', 'true');
      checkboxes[0].removeAttribute('checked');
      this.setChanges();
    }
    // set master to empty
    else if (checkedCounter === 0) {
      checkboxes[0].removeAttribute('indeterminate');
      checkboxes[0].removeAttribute('checked');
      this.setChanges();
    }
  }

  setChanges() {
    const checkboxes = Array.from(
      this.hostElement.querySelectorAll('scale-checkbox')
    );
    const changedState: CheckboxState[] = [];
    for (let i = 0; i < checkboxes.length; i++) {
      changedState[i] = {
        id: checkboxes[i].inputId,
        checked: checkboxes[i].checked,
        disabled: checkboxes[i].disabled ? checkboxes[i].disabled : false,
        indeterminate: checkboxes[i].indeterminate,
      };
    }
    this.groupStatus = changedState;
  }

  render() {
    return (
      <Host>
        <div class="checkbox-group">
          <div class="checkbox-group__label">
            <slot name="checkbox-header" />
          </div>
          <div class="checkbox-group__container">
            <slot name="checkbox-list" />
          </div>
        </div>
      </Host>
    );
  }
}
