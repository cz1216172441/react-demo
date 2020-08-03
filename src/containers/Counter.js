import { connect } from 'react-redux'
import Counter from "../components/Counter";
import { increase, decrease } from "../actions";

export default connect(null, { increase, decrease })(Counter)
