const youtubeRegex =
        /(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.)?youtube\.com\/(?:watch(?:\.php)?\?.*v=)|v\/|embed\/)([a-zA-Z0-9\-_]+).*/;
const soundcloudRegex =
        /(?:https:\/\/)?(?:www.)?(?:m.)?soundcloud.com\/.*/;

export function isLinkValid(url) {
  if (youtubeRegex.test(url)) {
    return 'youtube';
  } else if (soundcloudRegex.test(url)) {
    return 'soundcloud';
  }
  return false;
}

export function getVidFromUrl(url) {
  const match = youtubeRegex.exec(url);

  if (match && match.length >= 1) {
    // Return the first group, which is the youtube id
    return match[1];
  }
  return 'error';
}

// Return -2 if currentsong, index if in songlist, -1 if not found
export function songInQueue(queue, id) {
  if (queue.currentSong && !(Object.keys(queue.currentSong).length === 0)) {
    if (queue.currentSong.vid === id) {
      return -2;
    }
  }

  if (queue.songlist) {

    // Find song by vid, return song object if found, else return false
    const index = queue.songlist.findIndex((song) => song.vid === id );
    return index;

    // Find by song vid, and return as boolean
    // return Boolean(queue.songlist.find((song) => song.vid === id));
    // Need to change to this when we start upvoting songs on duplicate adds
    // return (queue.songlist.findIndex((song) => song.vid === id));
  }

  return false;
}
