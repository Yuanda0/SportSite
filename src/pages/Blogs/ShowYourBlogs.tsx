import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type BlogType = {
  id: string,
  blog: string,
  title: string,
};

export default function ShowYourBlogs() {
  const [blogs, setBlogs] = useState<BlogType | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>('');
  const [editedBlog, setEditedBlog] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/yourBlogs/${id}`);
      setBlogs(response.data);
      setEditedTitle(response.data.title);
      setEditedBlog(response.data.blog);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = async () => {
    if (editedTitle.trim() === "" || editedBlog.trim() === "") {
      window.alert("Title and blog cannot be empty.");
    }

    try {
      await axios.put(`http://localhost:3000/yourBlogs/${id}`, {
        title: editedTitle,
        blog: editedBlog,
      });
      setIsEditing(false);
      window.alert("Your blog has been updated!")
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleDelete = async () => {
    try {
      var answer = window.confirm("Are you sure?")
      if (answer) {
        await axios.delete(`http://localhost:3000/yourBlogs/${id}`);
        navigate("/blogs");
        window.alert("Your post has been deleted");
      }
      else {
        return;
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  if (!blogs) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-h-full min-h-screen flex justify-center items-center">
      
      <div className="w-full max-w-xl p-4 mx-auto border rounded-md shadow-md bg-white">
        <h1 className="text-center text-3xl font-bold mb-6">
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full border-b-2 p-2 outline-none"
            />
          ) : (
            blogs.title
          )}
        </h1>
        <p className="text-lg mb-8">
          {isEditing ? (
            <textarea
              value={editedBlog}
              onChange={(e) => setEditedBlog(e.target.value)}
              className="w-full border p-2 outline-none"
            />
          ) : (
            blogs.blog
          )}
        </p>
        <div className="flex justify-between items-center">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-4 py-2 text-white bg-green-600 hover:bg-green-800 rounded-lg"
            >
              Save Changes
            </button>
          ) : (
            <div>
              <button
                onClick={handleEdit}
                className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-800 rounded-lg"
              >
                Edit Blog
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-white bg-red-600 hover:bg-red-800 rounded-lg ml-4"
              >
                Delete Blog
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}