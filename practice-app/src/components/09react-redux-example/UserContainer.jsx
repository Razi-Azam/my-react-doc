import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux'
import Heading from '../ui-comps/Heading'
import Container from '../ui-comps/Container'

function UserContainer({userData, fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    }, [])

  return (
    <Container>
        {userData.loading ? (
            <Heading><h2>Loading...</h2></Heading>
            ) : userData.error ? (
                <h2>{userData.error}</h2>
            ) : (
                <div>
                    <Heading><h1>User Data</h1></Heading>
                    <div>
                        {userData &&
                            userData.users &&
                            userData.users.map(user => <p key={user.id}>{user.name}</p>)
                        }
                    </div>
                </div>
            )
        }
    </Container>
  )

}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)