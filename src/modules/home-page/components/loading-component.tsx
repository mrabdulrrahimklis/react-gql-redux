import { Component } from "react";
import { SimpleText } from "../../../core/shared";

class LoadingComponent extends Component<any, any> {
  render() {
    const { loading } = this.props;
    return <>{loading === null && <SimpleText>Loading...</SimpleText>}</>;
  }
}

export default LoadingComponent;
