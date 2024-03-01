import './style.scss';

const PageHeader = (props) => {

    const {heaaderText, icon} =props;

return (
    <>
    <div className="PageHeader_wrapper">
        <h2>{heaaderText}</h2>
        <span>{icon}</span>
    </div>
    </>
);
}

export default PageHeader;