import React from "react";
import Header from "./Header.jsx";
import {phones} from "./mydatabase.js";
import PropTypes from "prop-types";

class ItemPage extends React.PureComponent{
    componentDidMount(){
        fetch("/api/items/${this.props.match.params.itemId}")
        .then( res =>{
            return res.json();
        })
        .then ( item=>{
            console.log("item", item);
        })
        .catch(err =>{
            console.log("item page", err);
        });
    }

    render(){
        console.log("this.props", this.props);
        console.log("itemID", this.props.match.params.itemId);
        const item = phones[0];
        return (
            <>
            <Header/>
            <div className={"itemContainer"}>
                <img src={item.imgSrc} />
                <div className={"item__title"}>{item.title}</div>
                <div className={"item__price"}>{item.price}</div>
            </div>
            </>
        );
    }
}

ItemPage.propTypes = {
    match: PropTypes.object.isRequired,
};

export default ItemPage;