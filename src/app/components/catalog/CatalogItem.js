import React from "react"
import { Link } from "react-router"

import { OMURA_HOST, OMURA_PORT} from "../../config/environtment"

const CatalogItem = (props) => {
	return (
    <div className="col-md-2 col-sm-3 col-xs-12">
      <div
          style={{ cursor: 'pointer' }}
          onClick={ () => props.onAdd(props.name, props.category) }>
        <div className="thumbnail">
          <img src={ `http://${ OMURA_HOST }:${ OMURA_PORT}/${ props.img }` } alt={ props.name } className="" />
          <div className="caption text-center">
            <h4>{ props.title }</h4> 
            {/*<p>
              { props.desc }
            </p>*/}
          </div>
        </div>
      </div>
    </div>
	)
}

export default CatalogItem
