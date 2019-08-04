import React, { PureComponent } from "react";

interface Props {
  content: string;
}

interface State {
  isLoading: boolean;
}

// Potentially implement lazy load
export default class Image extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  public render() {
    return this.state.isLoading ? null : (
      <div className="image-container">
        <img src={this.props.content} alt="" />
      </div>
    );
  }
}
