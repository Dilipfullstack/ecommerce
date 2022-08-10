import '../App.css'

const ProductDisplay = (props) => {
    return (
        <>
            <div class="dropdown img-container">
                <img src={props.image} width="100" height="100" alt="fakeAPI" />
                <div class="dropdown-content">
                    <img src={props.image} width="300" height="200" alt="fakeAPI" />
                    <div class="desc">{props.description}</div>
                </div>
            </div>
        </>

    )
};

export default ProductDisplay;