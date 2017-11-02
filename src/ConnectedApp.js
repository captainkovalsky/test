import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import passVenue from './service/passVenue';
import * as messages from './messages';

import {
  compose,
  withHandlers,
  withProps,
  defaultProps,
} from 'recompose'
import App from './app.jsx'

const mapStateToProps = (state) => {
  return {
    users: state.root.users,
    venues: state.root.venues,
    skipVenues: state.result.skipVenues,
    goodVenues: state.result.goodVenues,
    drinkProblems: state.result.drinkProblems,
    eatProblems : state.result.eatProblems
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onEatError: (message) => dispatch(messages.onEatError(message)),
  onDrinkError: (message) => dispatch(messages.onDrinkError(message)),
  onFoundGood: (good) => dispatch(messages.onFoundGood(good)),
  onFoundSkipped: (skipped) => dispatch(messages.onFoundSkipped(skipped)),
  onReset: () => dispatch(messages.onReset()),
}, dispatch);


const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
  onSubmit: props => event => {
    event.preventDefault()
  let users = ['Alice', 'Bob'];
  // let users = Object.keys(props.values);

  let eatError = (venue, name) => props.onEatError(`There is nothing for ${name} to eat in ${venue}`);
  let drinkError = (venue, name) => props.onDrinkError(`There is nothing for ${name} to drink in ${venue}`)

  let skiped = [];
  props.users.forEach(u => props.venues.forEach(v => passVenue(v, u, eatError, drinkError, skiped)));
  props.onFoundGood([...new Set(props.venues.map(v => v.name).filter(v => !skiped.includes(v)))]);
  props.onFoundSkipped([...new Set(skiped)]);

}
}),
  reduxForm({
    form: 'simple'
  })
)


export default enhance(App);
