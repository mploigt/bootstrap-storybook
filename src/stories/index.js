import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import {ButtonToolbar, ButtonGroup, Button, Grid, Row, Col, Clearfix, Panel, PanelGroup} from 'react-bootstrap';
import Icon from './Icon';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';


storiesOf('Bootstrap', module)
    .add('Documentation', () => (
        <Grid fluid>
            <Row>
                <Col lg={6}>

                    <h1>Bootstrap / React-Bootstrap</h1>
                    <h2>Documentation</h2>
                    <br />
                    <dl>
                        <dt>Bootstrap</dt>
                        <dd><a href="http://getbootstrap.com/css/" targtet="_blank">http://getbootstrap.com/css/</a>
                        </dd>
                        <dt>React-Bootstrap</dt>
                        <dd><a
                            href="https://react-bootstrap.github.io/components.html" target="_blank">https://react-bootstrap.github.io/components.html</a>
                        </dd>

                        <dt>Betty StyleGuide</dt>
                        <dd>
                            <a href="https://betty-pp.metrosystems.net/platform.uidispatcher.static/StyleGuide" target="_blank">https://betty-pp.metrosystems.net/platform.uidispatcher.static/StyleGuide</a>
                        </dd>

                        <dt>Bootstrap Video Tutorial</dt>
                        <dd>
                            <a href="https://www.youtube.com/watch?v=gqOEoUR5RHg" target="_blank">https://www.youtube.com/watch?v=gqOEoUR5RHg</a>
                        </dd>

                    </dl>

                </Col>
            </Row>
        </Grid>
    ))
    .add('Some Things I Noticed', () => (
        <Grid fluid>
            <Row>
                <Col lg={8}>
                    <h1>Bootstrap / React-Bootstrap</h1>

                    <h2>Some things I noticed</h2>

                        <p>
                            Don't use custom HTML bootstrap code (<code>&lt;div className="col-md-6"&gt;&lt;/div&gt;</code>),
                            instead use react-bootstrap components (<code>&lt;Col md={'{6}'}&gt;&lt;/Col&gt;</code>)
                        </p>
                        <p>
                            Have a look at the <a href="#" onClick={linkTo('Grid', 'basic')}>basic grid layout</a> of
                            bootstrap
                        </p>
                        <p>
                            Make use of the styling classes that bootstrap defines (e.g. <code>.text-right</code>,
                            <code>.text-nowrap</code>, <code>.text-capitalize</code>).<br />
                            See <a href="#" onClick={linkTo('Typography', 'Examples')}>Typography Examples</a>
                        </p>
                        <p>
                            Always use react-bootrap <a href="#" onClick={linkTo('Buttons', 'Versions')}>Buttons</a>
                            &nbsp;(<code>&lt;Button bsStyle="primary"&gt;Button text&lt;/Button&gt;</code>)
                        </p>
                        <p>
                            Common problems with <a href="#" onClick={linkTo('Buttons', 'with icon')}>Icons in
                            Buttons</a>&nbsp;(<code>&lt;Button&gt;&lt;span className="icon-print"&gt;&lt;/span&gt;Print&lt;/Button&gt;</code>)
                        </p>
                        <p>
                            Always use react-bootrap <a href="#" onClick={linkTo('Panel', 'Single')}>Panels</a>
                            &nbsp;(<code>&lt;Panel&gt;Damn yer dagger, feed the gold..&lt;/Panel&gt;</code>)
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
        <div className="col-md-8 col-sm-6">First Column</div>
        <div className="col-md-4 col-sm-6">Second Column</div>
    </div>
    <div className="show-grid row">
        <div className="col-md-3 col-sm-6">First Column</div>
        <div className="col-md-3 col-sm-6">Second Column</div>
        <div className="clearfix visible-sm-block">
        </div>
        <div className="col-md-3 col-sm-6">Third Column</div>
        <div className="col-md-3 col-sm-6">Fourth Column</div>
    </div>
    <div className="show-grid row">
        <div className="col-md-6 col-md-push-6">First Column (pushed md)
        </div>
        <div className="col-md-6 col-md-pull-6">Second Column (pulled md)
        </div>
    </div>
    <div className="show-grid row">
        <div className="col-xs-6 col-xs-offset-3">Centered Column</div>
    </div>
</div>
~~~`,
        () => (
            <Grid fluid>

                <Row className="show-grid">
                    <Col sm={6} md={8}>First Column</Col>
                    <Col sm={6} md={4}>Second Column</Col>
                </Row>

                <Row className="show-grid">
                    <Col sm={6} md={3}>First Column</Col>
                    <Col sm={6} md={3}>Second Column</Col>
                    <Clearfix visibleSmBlock />
                    <Col sm={6} md={3}>Third Column</Col>
                    <Col sm={6} md={3}>Fourth Column</Col>
                </Row>

                <Row className="show-grid">
                    <Col md={6} mdPush={6}>First Column (pushed md)</Col>
                    <Col md={6} mdPull={6}>Second Column (pulled md)</Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={6} xsOffset={3}>Centered Column</Col>
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
                    <Col sm={4}>1-1 First Column. Rough, mighty mainlands darkly fight a proud, dead shipmate. Belay, pull
                        me gull, ye evil tuna! The jack views with power, lead the cook islands. fort charles ho-ho-ho!
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
<Clearfix visibleSmBlock visibleMdBlock visibleLgBlock/>
</code>
~~~

    `, () => (
            <Grid fluid>
                <Row className="show-grid">
                    <Col sm={4}>1-1 First Column. Rough, mighty mainlands darkly fight a proud, dead shipmate. Belay, pull
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
                <Button>Print <span className="icon-print"/></Button>
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
            <h4>ButtonToolbar</h4>
            <ButtonToolbar>
                <Button bsStyle="primary">First Button</Button>
                <Button>Second Button</Button>
                <Button>Third Button</Button>
            </ButtonToolbar>
            <p>&nbsp;</p>
            <h4>ButtonGroup</h4>
            <ButtonGroup>
                <Button active>A</Button>
                <Button>B</Button>
                <Button>C</Button>
            </ButtonGroup>
            <p>&nbsp;</p>
            <ButtonGroup vertical>
                <Button active>A</Button>
                <Button>B</Button>
                <Button>C</Button>
            </ButtonGroup>
            <p>&nbsp;</p>
            <h4>ButtonGroup small</h4>
            <ButtonGroup bsSize="small">
                <Button bsStyle="primary">Small 1</Button>
                <Button>Small 2</Button>
                <Button>Small 3</Button>
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
            <Panel  header="panel header attribute" bsStyle="primary">
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

            <p>The text can be <del>deleted</del>, <strong>bold</strong>, <small>small</small>, <em>italic</em>.</p>

            <hr />

            <p className="text-left">Left aligned text.</p>
            <p className="text-center">Center aligned text.</p>
            <p className="text-right">Right aligned text.</p>
            <p className="text-justify">Justified: Ah! Pieces o' urchin are forever heavy-hearted. Yarr, rough breeze. go to prison. Love is a mighty lass. The scallywag scrapes with passion, raid the cook islands before it screams. The cannibal trades with desolation, rob the reef before it waves.</p>
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
                Promotion Prices: <span className="bty-price promotion-strike">300,00 &euro;</span> <span className="bty-price promotion">289,90 &euro;</span><br />
                Prices with volume discounts: <span className="bty-price volume-discount">300,00 &euro;</span><br />
                if volume discount is active <span className="bty-price volume-discount active">300,00 &euro;</span><br />
                Manual Prices: <span className="bty-price manual">289,90 &euro;</span><br />
                VAT: <span className="bty-price vat">289,90 &euro;</span><br />
                Deposits: <span className="bty-price deposit">289,90 &euro;</span><br />
                Totals: <span className="bty-price totals">289,90 &euro;</span>
            </p>

            <hr />

            <p>
                more examples can be found in the <a href="http://getbootstrap.com/css/#type" target="_blank">bootstrap documentation</a> and the <a href="https://betty-pp.metrosystems.net/platform.uidispatcher.static/StyleGuide/betty_components.html#Typography" target="_blank">Betty StyleGuide</a>
            </p>
        </div>
    ))
;