import React from 'react';
import PropTypes from 'prop-types';

import {Div} from '../common';

const Header = ({node, style, onClick, onRightClick}) => (
    <Div
        style={style.base}
        onClick={onClick ? () => onClick() : null}
        onContextMenu={(e) => {
            if (onRightClick) {
                e.preventDefault();
            }
        }}
        onMouseDown={(e) => {
            if (onRightClick && e.button === 2) {
                onRightClick(node, e);
            }
        }}>
        <Div style={style.title}>
            {node.name}
        </Div>
    </Div>
);

Header.propTypes = {
    style: PropTypes.object,
    node: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    onRightClick: PropTypes.func,
};

export default Header;
