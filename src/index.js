/**
 * @method sortino
 * @summary Sortino ratio
 * @description Calculate a Sortino ratio - a measure of risk similar to Sharpe ratio based on downside deviation
 * 
 * @param  {array} return_values asset/portfolio return values
 * @param  {number} target_return expected portfolio return (default 0)
 * @return {number}       
 *
 * @example
 * const return_values = [2, 1, -1, 18, 8, -2, 1, -1]
 *
 * sortino(return_values);
 * // 3.7527767497325675
 * 
 */

export default function sortino (return_values, target_return = 0) {

	// 1)  Calculate the numerator of the 
	// Sortino ratio, the average period 
	// return minus the target return
	const avg_return = return_values.reduce( ( a, b ) => a + b, 0 ) / return_values.length;

	const sortino_numerator = avg_return - target_return

	// 2) For each data point, calculate
	// the difference between that data
	// point and the target level. For data
	// points above the target level, set
	// the difference to 0%. The result of
	// this step is the underperformance
	// data set
	const underperformance = return_values.map( p => Math.min( target_return, p - target_return ) )

	// 3) Calculate the square of each
	// value in the underperformance data
	// set 
	const underperformance_squared = underperformance.map( p => Math.pow(p, 2) )

	// 4) Calculate the average of all
	// squared differences determined in
	// Step 3
	const underperformance_squared_average = underperformance_squared.reduce( ( a, b ) => a + b, 0 ) / underperformance_squared.length

	// 5) Take the square root of the
	// average determined in Step 4. This
	// is the target downside deviation
	// used in the denominator of the
	// Sortino ratio
	const target_downside_deviation = Math.sqrt(underperformance_squared_average)

	// 6) Calculate the Sortino ratio
	const sortino_ratio = avg_return / target_downside_deviation

	return sortino_ratio
}

