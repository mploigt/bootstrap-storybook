import React from 'react';
import {storiesOf, linkTo} from '@kadira/storybook';
import {ButtonToolbar, ButtonGroup, Button, Grid, Row, Col, Clearfix, Panel, PanelGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';


storiesOf('Bootstrap', module)
    .add('Start', () => (
        <Grid fluid>
            <Row>
                <Col lg={8}>
                    <h1>Bootstrap</h1>
                    <ul>
                        <li>A collecton of stylesheet definitions for responsive web design</li>
                        <li>Normally bundled with jQuery for interactive stuff (modals, popover)</li>
                    </ul>

                    <h1>react-bootstrap</h1>
                    <ul>
                        <li>Library of react components that produces HTML with bootstrap classes attached</li>
                        <li>cleaner code</li>
                        <li>No jQuery needed</li>
                    </ul>

                </Col>
            </Row>
        </Grid>
    ))
    .add('Things', () => (
        <Grid fluid>
            <Row>
                <Col lg={8}>

                    <h1>Some things I noticed</h1>
                    <hr />
                    <p>
                        For nearly every bootstrap component there is a correcponting react component.<br />
                        Instead of writing <code>&lt;div className="col-md-6"&gt;&lt;/div&gt;</code> you could simply
                        write <code>&lt;Col md={'{6}'}&gt;&lt;/Col&gt;</code>
                        <br />or<br />
                        <code>&lt;Button bsStyle=&quot;primary&quot;&gt;Text&lt;/Button&gt;</code> instead of<br />
                        <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Text&lt;
                            /button&gt;</code>
                    </p>
                    <hr />
                    <p>
                        Every grid (<code>&lt;Row&gt;&lt;Col&gt;&lt;/Col&gt;&lt;/Row&gt;</code>) has to be surrounded by
                        a container.
                        In our case <code>&lt;Grid fluid&gt;</code>.
                        <br />
                        You shouldn't nest containers (double margins), but you certainly can nest rows/cols.
                    </p>
                    <hr />
                    <p>
                        Bootstrap provides a lot of styling and alignning classes (e.g. <code>.text-right</code>
                        <code>.text-nowrap</code> <code>.text-capitalize</code> <code>.pull-right</code> <code>.pull-left</code>),
                        don't create custom ones if not needed.
                    </p>

                </Col>
            </Row>
        </Grid>
    ));

storiesOf('Grid', module)
    .addWithInfo('basic',
        `
#### Documentation
http://getbootstrap.com/css/#grid-intro

#### Rendered code
~~~html
<div className="container-fluid">
    <div className="show-grid row">
        <div className="col-md-8 col-sm-6">First Column md-8 sm-6</div>
        <div className="col-md-4 col-sm-6">Second Column md-4 sm-6</div>
    </div>
    <div className="show-grid row">
        <div className="col-md-3 col-sm-6">First Column md-3 sm-6</div>
        <div className="col-md-3 col-sm-6">Second Column md-3 sm-6</div>
        <div className="clearfix visible-sm-block">
        </div>
        <div className="col-md-3 col-sm-6">Third Column md-3 sm-6</div>
        <div className="col-md-3 col-sm-6">Fourth Column md-3 sm-6</div>
    </div>
    <div className="show-grid row">
        <div className="col-md-6 col-md-push-6">First Column md-6 push-6</div>
        <div className="col-md-6 col-md-pull-6">Second Column md-6 pull-6</div>
    </div>
    <div className="show-grid row">
        <div className="col-xs-6 col-xs-offset-3">Centered Column xs-offset-3</div>
    </div>
</div>
~~~`,
        () => (
            <Grid fluid>

                <Row className="show-grid">
                    <Col md={8} sm={6}>First Column md-8 sm-6</Col>
                    <Col md={4} sm={6}>Second Column md-8 sm-6</Col>
                </Row>

                <Row className="show-grid">
                    <Col md={3} sm={6}>First Column md-3 sm-6</Col>
                    <Col md={3} sm={6}>Second Column md-3 sm-6</Col>
                    <Clearfix visibleSmBlock/>
                    <Col md={3} sm={6}>Third Column md-3 sm-6</Col>
                    <Col md={3} sm={6}>Fourth Column md-3 sm-6</Col>
                </Row>

                <Row className="show-grid">
                    <Col md={6} mdPush={6}>First Column <span className="hidden-xs hidden-sm">(md-6 push-6)</span></Col>
                    <Col md={6} mdPull={6}>Second Column <span
                        className="hidden-xs hidden-sm">(md-6 pull-6)</span></Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={6} xsOffset={3}>Centered Column xs-offset-3</Col>
                </Row>

            </Grid>
        ))
    .addWithInfo('without Clearfix (broken)', `
#### Documentation
http://getbootstrap.com/css/#grid-responsive-resets
`,
        () => (
            <Grid fluid>
                <Row className="show-grid">
                    <Col sm={4}>1-1 First Column. Rough, mighty mainlands darkly fight a proud ho-ho-ho!
                        strength of malaria.</Col>
                    <Col sm={4}>1-2 Second Column</Col>
                    <Col sm={4}>1-3 Third Column</Col>
                    <Col sm={4}>2-1 Fourth Column</Col>
                    <Col sm={4}>2-2 Fifth Column</Col>
                    <Col sm={4}>2-3 Sixth Column</Col>
                </Row>
            </Grid>
        ))
    .addWithInfo('with Clearfix (ok)',
        `
#### Documentation
http://getbootstrap.com/css/#grid-responsive-resets

#### Rendered code
~~~html
<div class="clearfix visible-lg-block visible-md-block visible-sm-block"></div>
~~~

    `, () => (
            <Grid fluid>
                <Row className="show-grid">
                    <Col sm={4}>1-1 First Column. Rough, mighty mainlands darkly fight a proud, dead shipmate. Belay,
                        pull
                        me gull, ye evil tuna! The jack views with power, lead the cook islands. fort charles ho-ho-ho!
                        strength of malaria.</Col>
                    <Col sm={4}>1-2 Second Column</Col>
                    <Col sm={4}>1-3 Third Column</Col>
                    <Clearfix visibleSmBlock visibleMdBlock visibleLgBlock/>
                    <Col sm={4}>2-1 Fourth Column</Col>
                    <Col sm={4}>2-2 Fifth Column</Col>
                    <Col sm={4}>2-3 Sixth Column</Col>
                    <Clearfix visibleSmBlock visibleMdBlock visibleLgBlock/>
                </Row>
            </Grid>
        ))
;

storiesOf('Floats', module)
    .addWithInfo('clearfix', () => (
        <div className="demo-clearfix">

            <p>Common problem with floats:</p>

            <code>
                &lt;div className=&quot;wrapper&quot;&gt;<br />
                &nbsp;&nbsp;&lt;div className=&quot;pull-left&quot;&gt;Float to left&lt;/div&gt;<br />
                &nbsp;&nbsp;&lt;div className=&quot;pull-right&quot;&gt;Float to right&lt;/div&gt;<br />
                &lt;/div&gt;
            </code>

            <div className="wrapper">
                <div className="pull-left">Float to left</div>
                <div className="pull-right">Float to right</div>
            </div>
            <p>
                Yo-ho-ho, halitosis! Lord, love me jack, ye mighty ale! Ho-ho-ho! fortune of punishment. The ship breaks
                with malaria, hail the pacific ocean until it screams.
            </p>


            <div className="clearfix"></div>
            <br /><br /><br />


            <p>Clearfix to the rescue:</p>
            <code>
                &lt;div className=&quot;wrapper clearfix&quot;&gt;<br />
                &nbsp;&nbsp;&lt;div className=&quot;pull-left&quot;&gt;Float to left&lt;/div&gt;<br />
                &nbsp;&nbsp;&lt;div className=&quot;pull-right&quot;&gt;Float to right&lt;/div&gt;<br />
                &lt;/div&gt;
            </code>
            <div className="wrapper clearfix">
                <div className="pull-left">Float to left</div>
                <div className="pull-right">Float to right</div>
            </div>
            <p>
                Yo-ho-ho, halitosis! Lord, love me jack, ye mighty ale! Ho-ho-ho! fortune of punishment. The ship breaks
                with malaria, hail the pacific ocean until it screams.
            </p>


        </div>
    ))

;


storiesOf('Buttons', module)
    .addWithInfo('Versions', `
    #### Documentation
    http://getbootstrap.com/css/#buttons
`, () => (
        <div>
            <h4>Colors</h4>
            <ButtonToolbar>
                <Button>Default</Button>
                <Button bsStyle="primary">Primary</Button>
                <Button bsStyle="success">Success</Button>
                <Button bsStyle="info">Info</Button>
                <Button bsStyle="warning">Warning</Button>
                <Button bsStyle="danger">Danger</Button>
                <Button bsStyle="link">Link</Button>
            </ButtonToolbar>

            <h4>Sizes</h4>
            <ButtonToolbar>
                <Button bsSize="lg">Large</Button>
                <Button>Default</Button>
                <Button bsSize="sm">Small</Button>
                <Button bsSize="xs">Extra Small</Button>
            </ButtonToolbar>

            <h4>Icons</h4>
            <ButtonToolbar>
                <Button><span className="icon-print"/> Print</Button>
            </ButtonToolbar>

        </div>

    ))
    .addWithInfo('Groups',
        `
#### Documentation
http://getbootstrap.com/components/#btn-groups
    
#### Rendered code

~~~html
<div className="btn-toolbar">
    <button type="button" className="btn btn-primary">First Button</button>
    <button type="button" className="btn btn-default">Second Button</button>
    <button type="button" className="btn btn-default">Third Button</button>
</div>

<div className="btn-group">
    <button type="button" className="btn btn-default active">A</button>
    <button type="button" className="btn btn-default">B</button>
    <button type="button" className="btn btn-default">C</button>
</div>

<div className="btn-group-vertical">
    <button type="button" className="btn btn-default active">A</button>
    <button type="button" className="btn btn-default">B</button>
    <button type="button" className="btn btn-default">C</button>
</div>

<div className="btn-group btn-group-sm">
    <button type="button" className="btn btn-primary">Small 1</button>
    <button type="button" className="btn btn-default">Small 2</button>
    <button type="button" className="btn btn-default">Small 3</button>
</div>
~~~
`, () => (
            <div>
                <h4>Buttons without container</h4>
                <Button bsStyle="primary">First Button</Button>
                <Button>Second Button</Button>
                <Button>Third Button</Button>
                <p>&nbsp;</p>
                <h4>&lt;ButtonToolbar&gt;</h4>
                <ButtonToolbar>
                    <Button bsStyle="primary">First Button</Button>
                    <Button>Second Button</Button>
                    <Button>Third Button</Button>
                </ButtonToolbar>
                <p>&nbsp;</p>
                <h4>&lt;ButtonGroup&gt;</h4>
                <ButtonGroup>
                    <Button active>A</Button>
                    <Button>B</Button>
                    <Button>C</Button>
                </ButtonGroup>
                <p>&nbsp;</p>
                <h4>&lt;ButtonGroup vertical&gt;</h4>
                <ButtonGroup vertical>
                    <Button active>A</Button>
                    <Button>B</Button>
                    <Button>C</Button>
                </ButtonGroup>
                <p>&nbsp;</p>
                <h4>&lt;ButtonGroup bsSize=&quot;xs&quot;&gt;</h4>
                <ButtonGroup bsSize="xs">
                    <Button bsStyle="primary">xs 1</Button>
                    <Button>xs 2</Button>
                    <Button>xs 3</Button>
                </ButtonGroup>
            </div>
        ))
    .addWithInfo('with icon', `
Always add a space between icon and text:
~~~html
<Button>
    Print{" "}<span className="icon-print" />
</Button>
~~~

Don't put anything inside the icon &lt;span&gt; tags
~~~html
<Button>
    <span className="icon-print"> Print</span> (WRONG!)
</Button>
~~~
`, () => (
        <div>
            <h4><span className="icon-warning text-danger"/> Missing space</h4>
            <ButtonToolbar>
                <Button>Print<span className="icon-print"/></Button>
            </ButtonToolbar>
            <p>&nbsp;</p>
            <h4><span className="icon-warning text-danger"/> Text inside icon</h4>
            <ButtonToolbar>
                <Button><span className="icon-print"> Print</span></Button>
            </ButtonToolbar>
            <p>&nbsp;</p>
            <h4>Correct</h4>
            <ButtonToolbar>
                <Button>Print{" "}<span className="icon-print"/></Button>
            </ButtonToolbar>
            <p>&nbsp;</p>
            <h4>Without text</h4>
            <ButtonGroup>
                <Button><span className="icon-print"/></Button>
                <Button><span className="icon-remove"/></Button>
                <Button><span className="icon-settings"/></Button>
            </ButtonGroup>
        </div>
    ))
;

storiesOf('Panel', module)
    .addWithInfo('Single',
        `
#### Documentation
https://react-bootstrap.github.io/components.html#panels

#### Rendered code
~~~html
<div className="panel-group">
    <div className="panel panel-default">
        <div className="panel-body">
            Parrots stutter on power at singapore!
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-body">
            The sea-dog hauls with endurance, fight the brig.
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-body">
            Trade me skull, ye swashbuckling lass!
        </div>
    </div>
</div>
~~~
`, () => (
            <div>
                <h4>Single Panel</h4>
                <Panel>
                    <h4>How misty. You haul like a whale.</h4>
                    Beauty ho! raid to be commanded. The kraken endures with courage, break the fortress until it dies?
                </Panel>
                <Panel header="panel header attribute">
                    Cannibal of a scrawny courage, sail the beauty.
                </Panel>
                <Panel footer="panel footer attribute">
                    The dubloon crushes with power, raid the captain's quarters before it sings!
                </Panel>
                <Panel header="panel header attribute" bsStyle="primary">
                    Beauty ho! raid to be commanded. The kraken endures with courage, break the fortress until it dies?
                </Panel>
            </div>
        ))
    .addWithInfo('Group',
        `
#### Documentation
https://react-bootstrap.github.io/components.html#panels

#### Rendered code
~~~html
<div className="panel-group">
    <div className="panel panel-default">
        <div className="panel-body">
            Parrots stutter on power at singapore!
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-body">
            The sea-dog hauls with endurance, fight the brig.
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-body">
            Trade me skull, ye swashbuckling lass!
        </div>
    </div>
</div>
~~~
`, () => (
            <div>
                <h4>PanelGroup</h4>
                <PanelGroup>
                    <Panel>
                        <h4>How misty. You haul like a whale.</h4>
                        Parrots stutter on power at singapore!
                    </Panel>
                    <Panel>
                        The sea-dog hauls with endurance, fight the brig.
                    </Panel>
                    <Panel>
                        Trade me skull, ye swashbuckling lass!
                    </Panel>
                </PanelGroup>
            </div>
        ))
;


storiesOf('Typography', module)
    .addWithInfo('Examples',
        `
#### Documentation
http://getbootstrap.com/css/#type
`, () => (
            <div>
                <h1>Typography</h1>

                <hr />

                <p>The text can be, <strong>bold</strong>,
                    <small>small</small>
                    , <em>italic</em>.
                </p>

                <hr />

                <p className="text-left">Left aligned text.</p>
                <p className="text-center">Center aligned text.</p>
                <p className="text-right">Right aligned text.</p>
                <p className="text-justify">Justified: Ah! Pieces o' urchin are forever heavy-hearted. Yarr, rough
                    breeze. go to prison. Love is a mighty lass. The scallywag scrapes with passion, raid the cook
                    islands before it screams. The cannibal trades with desolation, rob the reef before it waves.</p>
                <p className="text-nowrap">Not wrapping: The warm pin smartly leads the corsair. .</p>

                <hr />

                <p className="text-lowercase">Lowercased text.</p>
                <p className="text-uppercase">Uppercased text.</p>
                <p className="text-capitalize">Capitalized text.</p>

                <hr />

                <p>
                    general: <span className="bty-price">289,90 &euro;</span><br />
                    primary: <span className="bty-price general">289,90 &euro;</span><br />
                    secondary: <span className="bty-price secondary">289,90 &euro;</span><br />
                    Customer Individual Prices / CIP: <span className="bty-price cip">289,90 &euro;</span><br />
                    Promotion Prices: <span className="bty-price promotion-strike">300,00 &euro;</span> <span
                    className="bty-price promotion">289,90 &euro;</span><br />
                    Prices with volume discounts: <span className="bty-price volume-discount">300,00 &euro;</span><br />
                    if volume discount is active <span className="bty-price volume-discount active">300,00 &euro;</span><br />
                    Manual Prices: <span className="bty-price manual">289,90 &euro;</span><br />
                    VAT: <span className="bty-price vat">289,90 &euro;</span><br />
                    Deposits: <span className="bty-price deposit">289,90 &euro;</span><br />
                    Totals: <span className="bty-price totals">289,90 &euro;</span>
                </p>

                <hr />

                <p>
                    more examples can be found in the <a href="http://getbootstrap.com/css/#type">bootstrap
                    documentation</a> and the <a
                    href="https://betty-pp.metrosystems.net/platform.uidispatcher.static/StyleGuide/betty_components.html#Typography"
                    target="_blank">Betty StyleGuide</a>
                </p>
            </div>
        ))
;

storiesOf('Documentation', module)
    .add('Bootstrap', () => (
        <Grid fluid>
            <Row>
                <Col lg={6}>

                    <h1>Documentation</h1>
                    <h2>Bootstrap / React-Bootstrap</h2>
                    <br />
                    <dl>
                        <dt>Bootstrap</dt>
                        <dd><a href="http://getbootstrap.com/css/" target="_blank">http://getbootstrap.com/css/</a>
                        </dd>
                        <dt>React-Bootstrap</dt>
                        <dd><a
                            href="https://react-bootstrap.github.io/components.html" target="_blank">https://react-bootstrap.github.io/components.html</a>
                        </dd>

                        <dt>Betty StyleGuide</dt>
                        <dd>
                            <a href="https://betty-pp.metrosystems.net/platform.uidispatcher.static/StyleGuide"
                               target="_blank">https://betty-pp.metrosystems.net/platform.uidispatcher.static/StyleGuide</a>
                        </dd>

                        <dt>Bootstrap Video Tutorial</dt>
                        <dd>
                            <a href="https://www.youtube.com/watch?v=gqOEoUR5RHg" target="_blank">https://www.youtube.com/watch?v=gqOEoUR5RHg</a>
                        </dd>

                        <dt>Interactive Tutorial</dt>
                        <dd>
                            <a href="http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank">http://www.tutorialrepublic.com/twitter-bootstrap-tutorial</a>
                        </dd>

                        <dt>(this)</dt>
                        <dd>
                            <a href="https://mploigt.github.io/bootstrap-storybook" target="_blank">https://mploigt.github.io/bootstrap-storybook</a><br />
                            <a href="https://github.com/mploigt/bootstrap-storybook" target="_blank">https://github.com/mploigt/bootstrap-storybook</a>
                        </dd>

                    </dl>

                </Col>
            </Row>
        </Grid>
    ))
;