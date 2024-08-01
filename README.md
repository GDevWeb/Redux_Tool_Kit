# Redux - Day 01 - basics

<div style="text-align:center">
<h1>Redux Tool Kit</h1>
<img src="./logo_redux.png"
     alt="ReduxData Flow Diagram"
     style="width: 200px; margin: 20px auto; height: auto; border-radius: 10px; ";/>

</div>

## Summary :

- [Redux - Day 01 - basics](#redux---day-01---basics)
  - [Summary :](#summary-)
- [Introduction](#introduction)
- [Pourquoi utiliser Redux Tool Kit ou non pas Redux ?](#pourquoi-utiliser-redux-tool-kit-ou-non-pas-redux-)
  - [Installation](#installation)
    - [Création du projet](#création-du-projet)
    - [Configuration de base](#configuration-de-base)
    - [Création d'un slice](#création-dun-slice)
    - [Configuration du store](#configuration-du-store)
    - [Utilisation du store et du slice dans les composants](#utilisation-du-store-et-du-slice-dans-les-composants)
  - [Définitions des Méthodes Clés de Redux](#définitions-des-méthodes-clés-de-redux)
    - [1. `createSlice`](#1-createslice)
    - [2. `configureStore`](#2-configurestore)
    - [3. `createAsyncThunk`](#3-createasyncthunk)
    - [4. `createReducer`](#4-createreducer)
    - [5. `useSelector` et `useDispatch`](#5-useselector-et-usedispatch)
    - [6. `Les extraReducers` avec Redux Toolkit](#6-les-extrareducers-avec-redux-toolkit)
      - [Contexte](#contexte)
      - [Pourquoi les `extraReducers` ?](#pourquoi-les-extrareducers-)
      - [Fonctionnement](#fonctionnement)
      - [Conclusion](#conclusion)
- [Conclusion](#conclusion-1)

# Introduction

Redux est une bibliothèque JavaScript populaire pour la gestion de l'état des applications, souvent utilisée avec React. Redux Toolkit (RTK) est le moyen officiel recommandé pour écrire une logique Redux, offrant une syntaxe simplifiée et des outils puissants pour rendre le développement plus efficace et moins sujet aux erreurs.

# Pourquoi utiliser Redux Tool Kit ou non pas Redux ?

Redux Toolkit apporte plusieurs améliorations par rapport à Redux standard :

1. **Mise en place simplifiée :** RTK fournit des utilitaires pour simplifier la configuration du store, rendant le processus de mise en place plus rapide et moins complexe.
2. **Syntaxe moins verbeuse :** RTK réduit la quantité de code boilerplate en utilisant des utilitaires comme `createSlice` et `createAsyncThunk`.
3. **Gestion simplifiée des mutations :** Avec l'intégration de la librairie `Immer`, RTK permet d'écrire du code qui modifie le state de manière "mutante", tout en garantissant que le state reste immuable en coulisses.

## Installation

Pour un nouveau projet avec React et Redux Toolkit, suivez ces étapes :

### Création du projet

1. Créez un nouveau projet avec Vite :

   ```bash
   yarn create vite "nom_du_projet" --template react
   ```

2. Installez Redux Toolkit et React Redux :
   ```bash
   yarn add @reduxjs/toolkit react-redux
   ```

### Configuration de base

Dans `main.js`, configurez le store et entourez l'application avec le `Provider` :

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### Création d'un slice

Un "slice" dans Redux Toolkit représente une partie de l'état de l'application et les reducers qui s'y rapportent.

1. Créez un fichier `src/features/counter.jsx` :

```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
      // Grâce à Immer, nous pouvons écrire du code "mutant" en toute sécurité.
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

// Exportation des actions
export const { increment, decrement } = counterSlice.actions;

// Exportation du reducer
export default counterSlice.reducer;
```

### Configuration du store

Créez un fichier `src/store.jsx` pour configurer le store Redux :

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter.jsx";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### Utilisation du store et du slice dans les composants

Utilisez les hooks `useSelector` et `useDispatch` de React Redux pour interagir avec le store dans vos composants.

1. Créez un composant `src/components/Counter.jsx` :

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter.jsx";

export default function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-xl font-extrabold text-center">
      <h1 className="text-black">CounterReducer</h1>
      <div className="text-white">{counter}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}
```

2. Importez et utilisez le composant `Counter` dans `App.jsx` :

```jsx
import Counter from "./components/Counter";

function App() {
  return (
    <div className="min-h-screen bg-slate-700 px-4">
      <div className="mx-auto max-w-3xl pt-10 pb-20">
        <Counter />
      </div>
    </div>
  );
}

export default App;
```

Pour mieux comprendre Redux et Redux Toolkit (RTK), il est essentiel de se familiariser avec certaines des méthodes clés utilisées pour gérer l'état de l'application. Voici une section dédiée aux définitions des méthodes propres à Redux et RTK.

---

## Définitions des Méthodes Clés de Redux

### 1. `createSlice`

La méthode `createSlice` est un utilitaire de Redux Toolkit qui simplifie la création de slices, qui sont des morceaux de l'état global de l'application. Chaque slice comprend :

- **Un nom** : identifie le slice dans le store global.
- **Un état initial** : définit la structure et les valeurs initiales du slice.
- **Des reducers** : fonctions qui spécifient comment l'état change en réponse à des actions.

```javascript
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
```

### 2. `configureStore`

`configureStore` est une méthode de RTK utilisée pour configurer et créer le store Redux. Elle simplifie la configuration du store en prenant en charge la configuration des middlewares, des enhancers et du compose enhancers, qui sont souvent nécessaires avec Redux.

```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### 3. `createAsyncThunk`

`createAsyncThunk` est une méthode pour gérer les actions asynchrones dans Redux. Elle permet de créer des actions qui effectuent des opérations asynchrones, comme des appels API, et de gérer les états de ces opérations (en cours, réussie, échouée).

```javascript
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await fetch(`/api/users/${userId}`);
    return response.data;
  }
);
```

### 4. `createReducer`

`createReducer` est un utilitaire de RTK qui permet de définir des reducers avec une syntaxe moins verbeuse et sans avoir à manipuler directement l'état de manière immuable. Il utilise `Immer` pour gérer l'immuabilité de l'état.

```javascript
import { createReducer } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterReducer = createReducer(initialState, {
  increment: (state) => {
    state.value += 1;
  },
  decrement: (state) => {
    state.value -= 1;
  },
});
```

### 5. `useSelector` et `useDispatch`

Ces deux hooks sont fournis par la bibliothèque `react-redux` pour interagir avec le store dans les composants React :

- **`useSelector`** : permet de sélectionner une partie de l'état depuis le store.
- **`useDispatch`** : permet de dispatcher des actions pour modifier l'état.

```javascript
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter";

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
```

### 6. `Les extraReducers` avec Redux Toolkit

#### Contexte

Dans Redux, les reducers sont des fonctions qui déterminent comment l'état de l'application change en réponse à une action. Avec Redux Toolkit, une approche simplifiée pour gérer les reducers a été introduite via `createSlice`. Ce dernier permet de définir facilement des reducers et actions ensemble pour une partie spécifique de l'état.

#### Pourquoi les `extraReducers` ?

Les `extraReducers` sont utilisés pour gérer les actions définies en dehors du slice actuel. Cela est particulièrement utile dans les scénarios suivants :

1. **Actions provenant d'autres slices** : Parfois, une action dans un slice peut nécessiter de mettre à jour l'état dans un autre slice. Les `extraReducers` permettent de capturer ces actions et d'agir en conséquence.
2. **Actions asynchrones** : Lors de l'utilisation de `createAsyncThunk` pour les opérations asynchrones (comme les appels API), les `extraReducers` permettent de gérer les états de requête (loading, success, error) en réponse aux actions générées par le thunk.

#### Fonctionnement

Les `extraReducers` utilisent un objet builder pour définir des "cases" (réductions) qui correspondent à des types d'action spécifiques. Voici un aperçu de la syntaxe et du fonctionnement :

- **Syntaxe Basée sur `builder`** :

  ```javascript
  extraReducers: (builder) => {
    builder.addCase("someActionType", (state, action) => {
      // Logique de mise à jour de l'état ici
    });
    // Ajoutez d'autres cases ici si nécessaire
  };
  ```

- **Exemple Pratique** :
  Supposons que nous ayons une action `addOne` dans un slice `fruitsCart` qui doit également mettre à jour un autre slice `fruits`. Nous pouvons utiliser `extraReducers` pour gérer cette interaction.

  ```javascript
  import { createSlice } from "@reduxjs/toolkit";
  import { nanoid } from "nanoid";

  const initialState = {
    list: [
      {
        id: nanoid(8),
        name: "Mango",
        url: "/images/mango.jpg",
        price: 5,
      },
      {
        id: nanoid(8),
        name: "Watermelon",
        url: "/images/watermelon.jpg",
        price: 4,
      },
    ],
  };

  export const fruits = createSlice({
    name: "fruits",
    initialState,
    reducers: {
      // reducers locaux ici
    },
    extraReducers: (builder) => {
      builder.addCase("fruitsCart/addOne", (state, action) => {
        console.log("Action intercepted in fruits reducer", action.payload);
        // Logique additionnelle, par exemple, mettre à jour le stock
      });
    },
  });

  export default fruits.reducer;
  ```

Dans cet exemple, lorsque l'action `fruitsCart/addOne` est dispatchée, même si elle est définie dans un autre slice, le slice `fruits` peut réagir et mettre à jour son état en conséquence.

#### Conclusion

Les `extraReducers` dans Redux Toolkit offrent une méthode flexible et puissante pour gérer les actions qui ne sont pas définies localement dans le même slice. Ils permettent de séparer les concerns, facilitent le partage de la logique entre plusieurs slices, et améliorent la gestion des effets secondaires comme les requêtes API.

---

Ces méthodes et concepts sont fondamentaux pour utiliser Redux et Redux Toolkit de manière efficace. Elles simplifient la gestion de l'état dans les applications React et offrent une manière structurée de gérer les données à travers les composants.

# Conclusion

Redux Toolkit simplifie grandement la gestion de l'état dans les applications React en réduisant le code boilerplate et en fournissant des utilitaires puissants comme `createSlice` et `configureStore`. Cette introduction vous offre une base solide pour comprendre et utiliser Redux Toolkit dans vos projets. Pour aller plus loin, explorez les fonctionnalités avancées de RTK comme `createAsyncThunk` pour les actions asynchrones et l'intégration avec des middlewares comme Redux Saga ou Redux Thunk.
