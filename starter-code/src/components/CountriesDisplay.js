import React, {Component} from 'react';
import countriesData from '../countries'

class TablePage extends Component {
state = {
  copyCountries: [...countriesData]
}
render () {
    const {copyCountries} = this.state
    return (
        <>
           <p>Hello</p>
           <div>
            {copyCountries.map((city, index) =>
            <p className="idCard" key={index}>{city.name.official}</p>
            )}
            </div>
        </>
      );
}
    
};

export default TablePage;
