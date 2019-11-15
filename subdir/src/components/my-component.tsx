import * as React from "react";

export interface IProps {
  input: string;
}

export class MyComponent extends React.Component<IProps, {}> {
  render() {
    return <h1>{this.props.input}</h1>;
  }
}
