import { Actions } from '../constants';

const initialState = {
  layouts: [],
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case Actions.CREATE_LAYOUT: {
            const newId = payload.id;

            return {
                ...state,
                layouts: [...state.layouts, { id: newId, shardsList: [] }],
            };
        }

        case Actions.UPDATE_LAYOUT: {
            const layouts = state.layouts.map((layout) => {
                const { id, shardsList } = payload;

                if (layout.id === id) {
                    return { id, shardsList };
                }

                return layout;
            });

            return { ...state, layouts };
        }

        case Actions.REMOVE_LAYOUT: {
            const layouts = state.layouts.filter(({ id }) => id !== payload.id);

            return { ...state, layouts };
        }

        default:
            return state;
    }
}
