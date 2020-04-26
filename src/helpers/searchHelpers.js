export const searchHelpers = {
    filter: (list, term, type) => {
        if( type === 'name' ) {
    
          return list.filter( employee => employee.name.last.toLowerCase().includes( term.toLowerCase() ) 
                                       || employee.name.first.toLowerCase().includes( term.toLowerCase() )
          );
    
        } else if( type === 'state' ) {
    
          return list.filter( employee => employee.location.state.toLowerCase() === term.toLowerCase() );
    
        } else {
    
          return list.filter( employee =>  employee[type] === term);
    
        }
      }
}