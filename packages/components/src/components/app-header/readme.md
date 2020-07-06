# scale-header



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute      | Description | Type                                     | Default     |
| ------------------ | -------------- | ----------- | ---------------------------------------- | ----------- |
| `addonNavigation`  | --             |             | `any[]`                                  | `[]`        |
| `customClass`      | `custom-class` |             | `string`                                 | `''`        |
| `iconNavigation`   | --             |             | `any[]`                                  | `[]`        |
| `mainNavigation`   | --             |             | `any[]`                                  | `[]`        |
| `scrolled`         | `scrolled`     |             | `boolean`                                | `false`     |
| `sectorNavigation` | --             |             | `any[]`                                  | `[]`        |
| `styles`           | --             |             | `StyleSheet<string \| number \| symbol>` | `undefined` |


## Dependencies

### Used by

 - [scale-app-shell](../app-shell)

### Depends on

- [app-mega-menu](../app-mega-menu)
- [app-icon](../app-icon)
- [app-logo](../app-logo)
- [app-navigation-sector-mobile](../app-navigation-sector-mobile)
- [app-navigation-main-mobile](../app-navigation-main-mobile)

### Graph
```mermaid
graph TD;
  scale-app-header --> app-mega-menu
  scale-app-header --> app-icon
  scale-app-header --> app-logo
  scale-app-header --> app-navigation-sector-mobile
  scale-app-header --> app-navigation-main-mobile
  app-navigation-main-mobile --> app-icon
  scale-app-shell --> scale-app-header
  style scale-app-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*