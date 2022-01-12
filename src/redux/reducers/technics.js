const initialState = {
  technics: [
    {
      id: "0",
      category: "TV",
      company: "Samsung",
      model: "G2105",
      price: "1999.99",
      date: "2022-01-12",
      description: "Good stuff",
    },
    {
      id: "1",
      category: "Refrigerator",
      company: "Samsung",
      model: "Superduper",
      price: "999.99",
      date: "2022-01-12",
      description: "Good stuff",
    },
    {
      id: "2",
      category: "Cutter",
      company: "Samsung",
      model: "Insaneone",
      price: "99.99",
      date: "2022-01-12",
      description: "Good stuff",
    },
  ],
};

const ADD_TECH = "ADD_TECH";
const EDIT_TECH = "EDIT_TECH";

let test = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TECH: {
      // alert(action.tech.model);
      return {
        ...state,
        technics: [...state.technics, action.tech],
      };
    }
    case EDIT_TECH: {
      console.log(state.technics[action.payload.id]);
      console.log(action.payload);
      // technics[action.payload.id]:
      return {
        ...state,
        technics: state.technics.map((it, index) => {
          if (index.toString() === action.payload.id) {
            console.log("here");
            return {
              ...it,
              ...action.payload,
            };
          }
          return it;
        }),
      };
    }
    default:
      return state;
  }
};

export function addTech(tech) {
  return { type: ADD_TECH, tech };
}

export function editTech(payload) {
  return { type: EDIT_TECH, payload };
}

export default test;
