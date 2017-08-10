import React, { Component } from 'react';
import { VrButton, Text } from 'react-vr';

export default class NavButton extends React.Component {

    static contextTypes = {
      router: React.PropTypes.object.isRequired,
    };

    render() {
        const { to } = this.props;
        const onClick = () =>{
          console.log(this.context);
          this.context.router.history.push(to);
        }

        return (
            <VrButton onClick={onClick}>
              {this.props.children}
            </VrButton>
        );
    }
}
