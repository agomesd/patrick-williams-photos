import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useHooks from "../../hooks/useHooks";
import { supabase } from "../../utils/initSupabase";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AddBoxIcon from "@material-ui/icons/AddBox";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "../../styles/pages/User.module.css";

const initialState = {
  username: "",
  email: "",
  website: "",
  bio: "",
  avatar_url: "",
};

const User = () => {
  const [{ username, email, website, bio, avatar_url }, setUserProfile] =
    useState(initialState);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const router = useRouter();
  const { session } = useHooks();
  const currentUser = session?.user;
  const { user } = router.query;

  const getProfile = async () => {
    try {
      setLoading(true);

      let { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("userId", currentUser.id)
        .single();

      if (error) console.log(error.message);

      setProfile(data);
    } catch (error) {
      console.log("error: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  const setProfile = (profile) => {
    const { username, email, website, bio, avatar_url } = profile;
    setUserProfile((prevState) => ({
      ...prevState,
      username,
      email,
      website,
      bio,
      avatar_url,
    }));
  };

  const handleSaveProfile = async () => {
    try {
      setLoading(true);

      const { data } = await supabase
        .from("profiles")
        .select("id, userId")
        .eq("userId", currentUser.id)
        .single();

      console.log(data);

      const updates = {
        id: data.id,
        userId: data.userId,
        username,
        website,
        bio,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal",
      });

      if (error) console.log(error.mesage);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      setUpdateMode(false);
    }
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const url = process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT;

    try {
      if (!file) return toast.error("File does not exist.");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return toast.error("File must be jpeg or png format.");

      let formData = new FormData();
      formData.append("file", file);

      setUploading(true);
      const { data } = await axios.post(url, formData, {
        headers: { "content-type": "multipart/form-data" },
      });
      console.log(data);
      setUserProfile((prevState) => ({ ...prevState }));
    } catch (error) {
      console.log("error:", error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleUpdateMode = () => {
    setUpdateMode(!updateMode);
  };

  const handleChange = (e) => {
    const input = e.target;
    setUserProfile((prevState) => ({
      ...prevState,
      [input.name]: input.value,
    }));
  };

  useEffect(() => {
    getProfile();
  }, [session]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Profile</h1>
      <div className={styles.main}>
        <div className={styles.avatar}>
          {session?.user.id === user && (
            <>
              <label htmlFor="image_upload" className={styles.addPhotoIcon}>
                <AddBoxIcon />
              </label>
              <input
                className={styles.fileInput}
                type="file"
                name="image_upload"
                id="image_upload"
                onChange={handleUploadImage}
              />
            </>
          )}
          {avatar_url ? (
            <img
              src={avatar_url}
              alt="Image not found, please try uploading again."
            />
          ) : (
            <img
              src="https://res.cloudinary.com/agomesd/image/upload/v1622663930/patrick-williams-photos/pat-logo_be36j0.jpg"
              alt="Upload a profile image."
            />
          )}
        </div>
        <div className={styles.details}>
          <h3>{email}</h3>
          {updateMode ? (
            <form className={styles.form}>
              <input
                className={styles.textField}
                type="text"
                placeholder="username"
                name="username"
                onChange={handleChange}
                value={username ? username : ""}
              />
              <input
                className={styles.textField}
                type="text"
                placeholder="website"
                name="website"
                onChange={handleChange}
                value={website ? website : ""}
              />
              <textarea
                className={styles.textField}
                placeholder="biography"
                name="bio"
                onChange={handleChange}
                value={bio ? bio : ""}
                rows={4}
              />
            </form>
          ) : (
            <>
              {username ? (
                <h3>{username}</h3>
              ) : (
                <p>This profile does not have a username.</p>
              )}
              {website ? (
                <a
                  className={styles.website}
                  href=""
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {website}
                  <OpenInNewIcon className={styles.icon} />
                </a>
              ) : (
                <p>This profile does not have a website.</p>
              )}
              {bio ? <p>{bio}</p> : <p>This profile does not have a bio.</p>}
            </>
          )}
        </div>
      </div>
      {session?.user.id === user && (
        <div className={styles.buttonContainer}>
          {updateMode ? (
            <>
              <button
                className={`${styles.button} ${styles.cancelButton}`}
                onClick={handleUpdateMode}
              >
                cancel
              </button>
              <button
                className={`${styles.button} ${styles.saveButton}`}
                onClick={handleSaveProfile}
              >
                save
              </button>
            </>
          ) : (
            <button
              className={`${styles.button} ${styles.updateButton}`}
              onClick={handleUpdateMode}
            >
              update
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
