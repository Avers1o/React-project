import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
  render() {
    const { name, salary, onDelete, onToggleProp, onChangeSalary, increase, rise } = this.props;
    let classNames = "list-group-item d-flex justify-content-between";

    if (increase) {
      classNames += " increase";
    }
    if (rise) {
      classNames += " like";
    }

    const onSetNewSalary = (e) => {
      let salary = parseInt(e.target.value);
      
      if (isNaN(salary)) {
        salary = 0;
      }

      onChangeSalary(salary);
    };

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">
          {name}
        </span>
        <input type="text" className="list-group-item-input" value={salary + "$"} onChange={onSetNewSalary} />
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-cookie btn-sm" onClick={onToggleProp} data-toggle="increase">
            <i className="fas fa-cookie"></i>
          </button>

          <button className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>

          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
