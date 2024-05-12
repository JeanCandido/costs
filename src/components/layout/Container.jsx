import PropTypes from 'prop-types';
import styles from './Container.module.css';

function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

Container.propTypes = {
  children: PropTypes.node,
  customClass: PropTypes.class,
};

export default Container;