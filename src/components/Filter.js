const Filter = ({searchValue, handleInputText}) => (
  <div>
  <h5 className="text-left">Filters</h5>
  <form className="form-inline">
    
    <br></br>
    <input className="form-control" type="search" placeholder="Search" aria-label="Search"  value={searchValue} onChange={handleInputText} />
    
  </form>
  </div>
  
)

export default Filter