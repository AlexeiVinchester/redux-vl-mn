
const ErrorLoader = ({text}) => {

    return (
        <div className="row">
            <div className="alert alert-warning" role="alert">
                Message: {text}
            </div>
        </div>

    )
}

export { ErrorLoader };