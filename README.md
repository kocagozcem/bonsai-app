# Bonsai App
### Navigation
- [Bonsai App](#bonsai-app)
    - [Navigation](#navigation)
  - [Components](#components)
    - [Button](#button)
      - [Example](#example)
      - [Properties](#properties)
    - [Image](#image)
      - [Example](#example-1)
      - [Properties](#properties-1)
    - [Walkthrough](#walkthrough)
      - [Example](#example-2)
      - [Properties](#properties-2)
  - [Constants](#constants)
    - [Sizes](#sizes)
    - [Text Sizes](#text-sizes)
## Components

Custom components on Bonsai App is created with Atomic Design pattern. That means app contains custom components on 3 level. 
These levels are;
- Atoms
- Molecules
- Organisms

### Button
***Component type***
: Molecule

#### Example
```javascript
<Button value='Button Text' onPress={()=> console.log('clicked')} />
```
#### Properties
| Property    | Type     | Required|
| :---        | :----:   | :---:   |
| value       | String   | Yes     |
| onPress     | Function | Yes     |
| buttonStyle | Object   | No      |
| textStyle   | Object   | No      |

### Image
**Component Type;** Atom
#### Example
```javascript
<Image src='https://example.com/example.png' />
```
#### Properties
| Property       | Type    | Required |
| :---           | :----:  | :---:    |
| src            | String  | Yes      |
| containerStyle | Object  | No       |
| imageStyle     | Object  | No       |

### Walkthrough
**Component Type;** Organism
#### Example
Define pages as below
```javascript
const pages = [
  {
    image:
      'https://i.pinimg.com/originals/f4/a2/6f/f4a26fefa43e0bb33b7faf8fd16d528f.png',
    text: 'Find the Bonsai that will suite to your place',
    buttonText: 'Next',
  },
  {
    image:
      'https://images.vexels.com/media/users/3/199964/isolated/preview/ae782cab8ae7e722febb5869c09574cc-happy-delivery-boy-character-by-vexels.png',
    text: 'Let us deliver it for you',
    buttonText: 'Complete',
  },
];
```
Then use the component in jsx render method
```javascript
<Walkthrough pages={pages} />
```
#### Properties
| Property       | Type     | Required |
| :---           | :----:   | :---:    |
| pages          | Array    | Yes      |
| closeAction    | Function | Yes      |

---
## Constants
### Sizes
| Name    | Value    |
| :---    | :----:   |
| xs      | 4        |
| sm      | 8        |
| md      | 16       |
| lg      | 24       |
| xl      | 32       |

### Text Sizes
| Name        | Value    |
| :---        | :----:   |
| xsText      | 12       |
| smText      | 14       |
| mdText      | 16       |
| lgText      | 18       |
| xlText      | 20       |
