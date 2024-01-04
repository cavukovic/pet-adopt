import { Component } from'react';
import { Link } from'react-router-dom';

class ErrorBoundary extends Component { 
    state = { hasError: false};
    
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info){
        // the actual error that it caught 
        console.error(error, info);
    }

    render() {
        if (this.state.hasError) { 
            return(
                <h2>Something went wrong, <Link to="/">click here to go back home</Link></h2>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;