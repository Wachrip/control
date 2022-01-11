const initialState = {
  technics: [
    {
      category: "TV",
      company: "Samsung",
      model: "G2105",
      price: "1999.99",
    },
    {
      category: "Refrigerator",
      company: "Samsung",
      model: "Superduper",
      price: "999.99",
    },
    {
      category: "Cutter",
      company: "Samsung",
      model: "Insaneone",
      price: "99.99",
    },
  ],
};

const ADD_TECH = "ADD_TECH";
const SHOW_ALL = "SHOW_ALL";

let test = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TECH: {
      alert(action.tech.model);
      return {
        ...state,
        technics: [...state.technics, action.tech],
      };
    }
    case SHOW_ALL: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export function addTech(tech) {
  return { type: ADD_TECH, tech };
}

export function showAll() {
  return { type: SHOW_ALL };
}

export default test;
