import { Component } from "react";
import { SimpleText } from "../../../core/shared";

class LoadedComponent extends Component<any, any> {
  render() {
    const { loaded } = this.props;
    return <>{!loaded && <SimpleText>Check your internet...</SimpleText>}</>;
  }
}

export default LoadedComponent;
