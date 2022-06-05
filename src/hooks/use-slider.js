import { useReducer } from 'react';

const useSlider = images => {
    const INITIAL_STATE = {
        images: images,
        imageUrl: images[0],
        index: 0
    }
    
    const reducer = (state, action) => {
        const updatedState = { ...state };

        switch (action.type) {
            case 'NEXT':
                if (updatedState.index + 1 >= updatedState.images.length) return state;
                updatedState.imageUrl = updatedState.images[++updatedState.index];
                return updatedState;

            case 'PREV':
                if (updatedState.index - 1 < 0) return state;
                updatedState.imageUrl = updatedState.images[--updatedState.index];
                return updatedState;
        }
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const next = () => dispatch({type: 'NEXT'});
    const previous = () => dispatch({type: 'PREV'});

    return {
        next,
        prev: previous, 
        currentImage: state.imageUrl,
    }
}

export default useSlider;