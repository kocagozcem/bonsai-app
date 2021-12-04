# Bonsai App

### Navigation

- [Bonsai App](#bonsai-app)
    - [Navigation](#navigation)
  - [Components](#components)
    - [Image](#image)
      - [Example](#example)
      - [Properties](#properties)
    - [Logo](#logo)
      - [Example](#example-1)
      - [Properties](#properties-1)
    - [Order Counter](#order-counter)
      - [Example](#example-2)
      - [Properties](#properties-2)
    - [Button](#button)
      - [Example](#example-3)
      - [Properties](#properties-3)
    - [Search Bar](#search-bar)
      - [Example](#example-4)
    - [Walkthrough](#walkthrough)
      - [Example](#example-5)
      - [Properties](#properties-4)
  - [Constants](#constants)
    - [Sizes](#sizes)
    - [Text Sizes](#text-sizes)

## Components

Custom components on Bonsai App is created with Atomic Design pattern. That means app contains custom components on 3 level.
These levels are;

- Atoms
- Molecules
- Organisms

### Image

Wrapper component to display images.
**_Component type_**
Atom

#### Example

```javascript
<Image src="https://example.com/example.png" />
```

#### Properties

| Property       |  Type  | Required |
| :------------- | :----: | :------: |
| src            | String |   Yes    |
| containerStyle | Object |    No    |
| imageStyle     | Object |    No    |

### Logo

Bons.io text logo.
**_Component type_**
Atom

#### Example

```javascript
<Logo />
```

#### Properties

| Property |  Type  | Required | Default |
| :------- | :----: | :------: | :-----: |
| theme    | String |    No    | 'light' |

### Order Counter

Displays order count and count control buttons.
**_Component type_**
Atom

#### Example

```javascript
<OrderCounter count={10} countChangeEvent={cnt => console.log(cnt)} />
```

#### Properties

| Property         |   Type   | Required | Default |
| :--------------- | :------: | :------: | :-----: |
| countChangeEvent | Function |   Yes    |    -    |
| count            |  Number  |    No    |    0    |

### Button

Just a button nothing special.
**_Component type_**
Molecule

#### Example

```javascript
<Button value="Button Text" onPress={() => console.log('clicked')} />
```

#### Properties

| Property    |   Type   | Required |
| :---------- | :------: | :------: |
| value       |  String  |   Yes    |
| onPress     | Function |   Yes    |
| buttonStyle |  Object  |    No    |
| textStyle   |  Object  |    No    |

### Search Bar

Search input to filter bonsai you are looking for
**_Component type_**
Molecule

#### Example

```javascript
<SearchBar />
```

### Walkthrough

Gives information about application at the beginning step by step
**_Component type_**
Organism

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

| Property    |   Type   | Required |
| :---------- | :------: | :------: |
| pages       |  Array   |   Yes    |
| closeAction | Function |   Yes    |

---

## Constants

Constants used on application to provide a design system.

### Sizes

| Name | Value |
| :--- | :---: |
| xs   |   4   |
| sm   |   8   |
| md   |  16   |
| lg   |  24   |
| xl   |  32   |

### Text Sizes

| Name   | Value |
| :----- | :---: |
| xsText |  12   |
| smText |  14   |
| mdText |  16   |
| lgText |  18   |
| xlText |  20   |
