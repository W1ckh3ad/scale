import { CheckboxCell } from './cell-handlers/checkbox-cell';
import { DateCell } from './cell-handlers/date-cell';
import { GraphCell } from './cell-handlers/graph-cell';
import { LinkCell } from './cell-handlers/link-cell';
import { HTMLCell } from './cell-handlers/html-cell';
import { NumberCell } from './cell-handlers/number-cell';
import { SelectCell } from './cell-handlers/select-cell';
import { TagsCell } from './cell-handlers/tags-cell';
import { TextCell } from './cell-handlers/text-cell';

export const CELL_TYPES = {
  checkbox: CheckboxCell,
  date: DateCell,
  graph: GraphCell,
  html: HTMLCell,
  link: LinkCell,
  number: NumberCell,
  select: SelectCell,
  tags: TagsCell,
  text: TextCell,
};

// Fallback if no type set on field
export const DEFAULT_CELL_TYPE = 'text';

// Common cell defaults, can be overridden in cell type classes
export const CELL_DEFAULTS = {
  maxWidth: Infinity,
  minWidth: 20,
  resizable: true,
  sortable: false,
  sortBy: 'text',
  textAlign: 'left',
  visible: true,
  width: 'auto',
};
