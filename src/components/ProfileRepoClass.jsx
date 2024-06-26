import { Component } from "react";
import {
  Github_API_User,
  Github_UserName,
  Github_Repository_Name,
  options,
} from "../utils/constants";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

class ProfileRepoClass extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const {
      userInfo: { followers, html_url },
      repoInfo: repoList,
    } = this.props; 

    return (
      <div className="profile-repo-container">
        {repoList
          .filter((repo) => repo.name === Github_Repository_Name)
          .map((repo) => {
            return (
              <div key={repo.id} className="profile-repo">
                <h1>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h1>
                <h3 className="repo-des">{repo.description}</h3>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ProfileRepoClass;