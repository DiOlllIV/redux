import React from 'react';
import Filter from '../Filter';
import User from './User';
import { connect } from 'react-redux';
import { filteredUsersSelector } from './users.selectors';
import * as usersActions from './users.actions';

const UsersList = ({ usersList, setFilterText, filterText }) => {
    return (
        <div>
            <Filter
                filterText={filterText}
                count={usersList.length}
                onChange={setFilterText}
            />
            <ul className="users">
                {usersList.map(user => 
                    <User key={user.id}
                        {...user} />
                )}
            </ul>
        </ div>
    );
};

const mapState = state => {
    return { 
        usersList: filteredUsersSelector(state),
        filterText: state.users.filterText,
    };
};

const mapDispatch = {
    setFilterText: usersActions.setFilterText,
};

export default connect(mapState, mapDispatch)(UsersList);