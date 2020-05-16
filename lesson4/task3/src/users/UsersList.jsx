import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { goNext, goPrev } from './users.actions';

const UsersList = ({users, currentPage, goNext, goPrev}) => {
    console.log(currentPage)
    return (
        <div>
            <Pagination
                goPrev={goPrev}
                goNext={goNext}
                currentPage={currentPage}
                totalItems={users.length}
            />
            <ul className="users">
                {users.slice(currentPage * 3, currentPage * 3 + 3).map((user) => 
                    <User key={user.id} name={user.name} age={user.age} />
                )}
            </ul>
        </div>
    ); 
};

const mapState = state => {
    return {
        users: state.users.usersList,
        currentPage: state.users.currentPage,
    };
};

const mapDispatch = {
    goNext,
    goPrev,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUsers = connector(UsersList);

export default ConnectedUsers;