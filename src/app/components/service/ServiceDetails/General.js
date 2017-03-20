import React from "react"
import { Link } from "react-router"
import moment from "moment"

export default class General extends React.Component {
	render() {
		return (
			<div className="row">
			  <div className="col-xs-12">
			    <div className="panel">
			      <header className="panel-heading">
			        General
			      </header>
			      <div className="panel-body">
			        <div className="form-horizontal">
			          <div className="form-group">
			            <label className="col-sm-2 control-label">SERVICE NAME</label>
			            <div className="col-sm-10">
			              <input type="text" className="form-control" name="inputServiceName" defaultValue={ this.props.name } />
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">IMAGE TAG</label>
			            <div className="col-sm-10">
			              <p className="form-control-static d-inline-block" style={{ marginRight: '10px' }}>
			                <i className="fa fa-tag fa-fw" aria-hidden="true"></i> orcinus.io/wordpress
			              </p>
			              <select name="imageTag" id="imageTag" className="selectpicker" data-width="fit">
			                <option value="latest">latest</option>
			                <option value="beta">beta</option>
			              </select>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">STACK NAME</label>
			            <div className="col-sm-10">
			              <select name="selectStackName" id="selectStackName" className="selectpicker" data-width="fit">
			                <option value="wordpress-app" data-icon="fa fa-server fa-fw"> Wordpress-app</option>
			              </select>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">STATUS</label>
			            <div className="col-sm-1">
			              <p className="form-control-static text-success">RUNNING</p>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">REPLICATED</label>
			            <div className="col-sm-1">
			              <input type="number" className="form-control" defaultValue="1" min="1" max="10" />
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">CONTAINERS</label>
			            <div className="col-sm-10">
			              <p className="form-control-static">
			                <i className="fa fa-cube fa-fw" aria-hidden="true"></i> 1 Container
			              </p>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">VOLUMES</label>
			            <div className="col-sm-10">
			              <p className="form-control-static">
			                <i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 1 Volume
			              </p>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">AUTO RESTART</label>
			            <div className="col-sm-4">
			              <label className="radio-inline">
			                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />  Off
			              </label>
			              <label className="radio-inline"> 
			                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" /> On Failure
			              </label>
			              <label className="radio-inline"> 
			                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" /> Always
			              </label>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">AUTO REDEPLOY</label>
			            <div className="col-sm-4">
			              <label className="checkbox-inline">
			                <input type="checkbox" id="inlineCheckbox1" defaultValue="yes" /> Yes
			              </label>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">CREATED AT</label>
			            <div className="col-sm-10">
			              <p className="form-control-static">
			                <i className="fa fa-clock-o fa-fw" aria-hidden="true"></i>
			                { moment(this.props.created).format("dddd, MMMM Do YYYY, h:mm:ss a") }
			              </p>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">UPDATED AT</label>
			            <div className="col-sm-10">
			              <p className="form-control-static">
			                <i className="fa fa-clock-o fa-fw" aria-hidden="true"></i>
			                { moment(this.props.updated).format("dddd, MMMM Do YYYY, h:mm:ss a") }
			              </p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}