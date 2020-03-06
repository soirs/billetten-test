import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ users, isLoading }) => {
  return (
    <div>
      <div className='flex flex-wrap'>
        {!isLoading &&
          users.map((user) => {
            const { id, name } = user;
            return (
              <Link
                to={`/user/${id}`}
                className='rounded overflow-hidden px-6 py-4 shadow-lg bg-blue-100'
                key={id}
              >
                <div className='font-bold text-xl mb-2'>{name}</div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default UserCard;
