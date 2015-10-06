Ext.data.JsonP.HttpManager({"tagname":"class","name":"HttpManager","autodetected":{},"files":[{"filename":"httpManager.js","href":null}],"members":[{"name":"baseUrl","tagname":"property","owner":"HttpManager","id":"property-baseUrl","meta":{}},{"name":"execute","tagname":"method","owner":"HttpManager","id":"method-execute","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-HttpManager","short_doc":"HttpManager class to perform http calls against the sails server\nProvides helper methods to perform oAuth based http ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>HttpManager class to perform http calls against the sails server\nProvides helper methods to perform oAuth based http calls</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-baseUrl' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HttpManager'>HttpManager</span><br/></div><a href='#!/api/HttpManager-property-baseUrl' class='name expandable'>baseUrl</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Base Url for all the http calls ...</div><div class='long'><p>Base Url for all the http calls</p>\n<p>Defaults to: <code>&quot;http://selbi-server.herokuapp.com&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-execute' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HttpManager'>HttpManager</span><br/></div><a href='#!/api/HttpManager-method-execute' class='name expandable'>execute</a>( <span class='pre'>relativePath, method, objectToSend, isAuth, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This is a generic method to perform all the http calls to the sails server\nIt optionally provides oAuth calls. ...</div><div class='long'><p>This is a generic method to perform all the http calls to the sails server\nIt optionally provides oAuth calls.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>relativePath</span> : Object<div class='sub-desc'><p>relative path to the api</p>\n</div></li><li><span class='pre'>method</span> : Object<div class='sub-desc'><p>HttpMethod to be used (PUT, POST, GET, DELETE)</p>\n</div></li><li><span class='pre'>objectToSend</span> : Object<div class='sub-desc'><p>JSON Object that needs to be sent via http</p>\n</div></li><li><span class='pre'>isAuth</span> : Object<div class='sub-desc'><p>Indicates if the http call needs oAuth, It grabs the token from keychain</p>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'><p>Callback function after completing the http request</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});