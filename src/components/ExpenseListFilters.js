import React from 'react'

import { connect } from 'react-redux'

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

import { DateRangePicker } from 'react-dates'


class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = (focusedInput) => {
    this.setState(() => ({calendarFocused: focusedInput}))
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }

  onSortChange = (e) => {
    switch (e.target.value) {
      case 'amount':
        this.props.sortByAmount()
        break;
    
      case 'date':
        this.props.sortByDate()
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={this.onTextChange} 
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => (false)}
          showClearDates={true}
        />
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => {
    dispatch(setTextFilter(text))
  },
  sortByAmount: () => {
    dispatch(sortByAmount())
  },
  sortByDate: () => {
    dispatch(sortByDate())
  },
  setStartDate: (date) => {
    dispatch(setStartDate(date))
  },
  setEndDate: (date) => {
    dispatch(setEndDate(date))
  }
  // dispatch(setEndDate(endDate))
})

export { ExpenseListFilters as ExpenseListFiltersForTest}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)