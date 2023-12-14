import { useState, useCallback } from 'react'
function CandyDispenser() {
  console.log('CandyDispenser render', new Date())
  const initialCandies = ['snickers', 'skittles', 'twix', 'milky way', 'reeses']
  const [candies, setCandies] = useState(initialCandies)
  /*
  const dispense = candy => {
    setCandies(allCandies => allCandies.filter(c => c !== candy))
  }*/

  /**
   * this is when NOT to use a useCallback
   *
   *    With useCallback the original dispense function won't get garbage collected
   *    and a new one is created, so you're worse-off from a memory perspective.
   *
   *    The useCallback version is doing more work.
   *    Not only do we have to define the function,
   *    but we also have to define an array ([])
   *    and call the React.useCallback which itself is
   *    setting properties/running through logical expressions etc.
   */
  const dispense = useCallback(candy => {
    setCandies(allCandies => allCandies.filter(c => c !== candy))
  }, [])
  return (
    <div id="candy-dispenser">
      <h1>Candy Dispenser</h1>
      <div className="candy-list">
        <div>Available Candy</div>
        {candies.length === 0 ? (
          <button onClick={() => setCandies(initialCandies)}>refill</button>
        ) : (
          <ul className="list">
            {candies.map(candy => (
              <li className="item" key={candy}>
                <button onClick={() => dispense(candy)}>grab</button> {candy}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export { CandyDispenser }
