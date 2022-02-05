import React from 'react';
import styles from './styles.module.css';
import { connect } from 'react-redux';
import { search, change } from '../../redux/actions';

const Search = ({ searchCity, dispatch }) => {
    return (
        <div className={styles.search}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(change(searchCity));
                }}
            >
                <input
                    className={styles.search__input}
                    placeholder="Type a city..."
                    onChange={(e) => {
                        dispatch(search(e.target.value));
                    }}
                />
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    searchCity: state.searchCity,
});

export default connect(mapStateToProps)(Search);
