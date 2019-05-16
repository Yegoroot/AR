import React from "react";
import Pills from "components/Pills";
import arada from "api/verbs/someVerbs/arada";

class Uridu extends React.Component {
  render() {
    return (
      <div id="uridu">
        <h2 className="title h2ar contrast"> أراد - يُريدُ </h2>
        <Pills data={arada} />
      </div>
    );
  }
}

export default Uridu;
