import {Col, Row, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

const SubHeader = ({currentPage}) => {
    return (
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome}/> Home
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {currentPage}
                    </BreadcrumbItem>
                </Breadcrumb>
                <h2>{currentPage}</h2>
            </Col>
        </Row>
    );
};
export default SubHeader;