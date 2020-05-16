import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import * as usersAction from './users.actions';
import { UsersListSelector, currentPageSelector, usersListSelector } from './users.selectors';

const itemsPerPage = 3;

const UsersList = ({users, currentPage, goNext, goPrev}) => {
    const start = currentPage * itemsPerPage;
    const usersToDisplay = users.slice(start, start + itemsPerPage);
   
    return (
        <div>
            <Pagination
                goPrev={goPrev}
                goNext={goNext}
                currentPage={currentPage}
                totalItems={users.length}
            />
            <ul className="users">
                {usersToDisplay.map((user) => 
                    <User key={user.id} name={user.name} age={user.age} />
                )}
            </ul>
        </div>
    ); 
};

const mapState = state => {
    return {
        users: usersListSelector(state),
        currentPage: currentPageSelector(state),
    };
};

const mapDispatch = {
    goNext: usersAction.goNextPage,
    goPrev: usersAction.goPrevPage,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUsers = connector(UsersList);

export default ConnectedUsers;