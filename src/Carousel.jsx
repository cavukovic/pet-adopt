import {Component } from'react';

class Carousel extends Component { 
    state = {
        active: 0 
    }

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
    }

    // when you do an arrow function it doesn't create a new scope, but if you didn't do an arrow
    // it will make a new scope and "this" will be different
    handleIndexClick = (e) => {
        this.setState({
            active: +e.target.dataset.index
        })
    }

    // class components do not have hooks
    render () {
        const {active} = this.state; // this is what you use instead of use state, state is mutable using this.setState
        const {images} = this.props; // props is read only

        return (
            <div className="carousel"> 
                <img src={images[active]} alt="animal hero"/>
                <div className="carousel-smaller">
                    {images.map((image, index) => (
                        <img
                            src={image}
                            alt="animal"
                            key={image}
                            className={index === active ? "active" : ""}
                            onClick={this.handleIndexClick}
                            data-index={index}
                        />
                    ))}
                </div>
            </div>
        )

    }
}

export default Carousel;