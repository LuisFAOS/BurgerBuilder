import React from 'react';
import './styles.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

function Burger(props) {

    const IngredientsPreparator = 
        Object.keys(props.ingredients)
        .map(keyIg => {
            return [...Array(props.ingredients[keyIg])]
                        .map((_,i)=>{
                            return (
                            <BurgerIngredient 
                                key={keyIg +i } 
                                type={keyIg}
                            />
                            );
                        });
        });

    return (
        <div className="Burger">
            <BurgerIngredient type="BreadTop"/>
                {IngredientsPreparator}
            <BurgerIngredient type="BreadBottom"/>
        </div>
    );
}

export default Burger;