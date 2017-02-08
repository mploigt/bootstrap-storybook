import React from 'react';

class Icon extends React.Component {
    render() {
        const spacer = this.props.space ? " " : "";
        const text = this.props.text ? this.props.text : "";
        return (
            <span><span className={"icon-" + this.props.symbol} />{spacer + text}</span>
        )
    }
}

Icon.propTypes = {
    symbol: React.PropTypes.string.isRequired,
    text: React.PropTypes.string,
    space: React.PropTypes.bool,
};
Icon.defaultProps = {
    space: true
};

export default Icon;
