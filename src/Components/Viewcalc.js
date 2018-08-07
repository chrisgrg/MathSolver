import React, { Component } from "react";
import { Grid, Segment, Header, Button } from "semantic-ui-react";
import * as math from "mathjs";

const display = {
  MozUserSelect: "none",
  WebkitUserSelect: "none",
  msUserSelect: "none",
  OUserSelect: "none",
  userSelect: "none",
  width: "auto"
};

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exp: "",
      result: 0
    };
  }

  onChangeNumber = number => {
    const { exp, result } = this.state;
    let result1;
    if (number !== "=") {
      const newExp = exp.concat(number); // appened old exp with new Expression ( newExp -> new Expression )
      try {
        result1 = math.eval(newExp);
      } catch (e) {
        result1 = result;
      }

      this.setState({
        exp: newExp,
        result: result1
      });
    } else {
      try {
        result1 = math.eval(exp);
      } catch (e) {
        result1 = result;
      }
      this.setState({
        result: result1
      });
    }
  };

  render() {
    const { result, exp } = this.state;
    return (
      <Grid stretched centered>
        <Grid.Row stretched>
          <Grid.Column width={16}>
            <Segment style={display}>
              <Header as="h5" textAlign="right">
                {exp}
              </Header>
              <Header as="h1" textAlign="right">
                {result}
              </Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Button
              content="7"
              fluid
              basic
              onClick={() => this.onChangeNumber(7)}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              content="8"
              basic
              fluid
              onClick={() => this.onChangeNumber(8)}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              content="9"
              basic
              fluid
              onClick={() => this.onChangeNumber(9)}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              content="&divide;"
              basic
              fluid
              onClick={() => this.onChangeNumber("/")}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Button
              content="4"
              basic
              fluid
              onClick={() => this.onChangeNumber(4)}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              content="5"
              basic
              fluid
              onClick={() => this.onChangeNumber(5)}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              content="6"
              basic
              fluid
              onClick={() => this.onChangeNumber(6)}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              content="&times;"
              basic
              fluid
              onClick={() => this.onChangeNumber("*")}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Button
              content="1"
              basic
              fluid
              onClick={() => this.onChangeNumber("1")}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              content="2"
              basic
              fluid
              onClick={() => this.onChangeNumber("2")}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              content="3"
              basic
              fluid
              onClick={() => this.onChangeNumber("3")}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              content="-"
              basic
              fluid
              onClick={() => this.onChangeNumber("-")}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Button
              content="0"
              basic
              fluid
              onClick={() => this.onChangeNumber(0)}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              content="."
              basic
              fluid
              onClick={() => this.onChangeNumber(".")}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              content="="
              basic
              fluid
              onClick={() => this.onChangeNumber("=")}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              content="+"
              basic
              fluid
              onClick={() => this.onChangeNumber("+")}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Calc;
