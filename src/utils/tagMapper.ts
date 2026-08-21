export const FALLBACK_TAG_MAP: Record<number, string> = {
  1: "GLC Recommended",
  2: "Most Popular",
  3: "Trending",
  4: "GLC Exclusive"
};

export const mapTagIdsToNames = (tagIds: any[], masterData?: any): string[] => {
  if (!Array.isArray(tagIds)) return [];
  
  const tagsList = masterData?.data?.tagResult || (masterData as any)?.tagResult || [];
  
  return tagIds.map((id: any) => {
    const numId = Number(id);
    const found = tagsList.find((t: any) => t.id === numId || t.tag_id === numId);
    
    if (found && (found.description || found.name || found.tag_name)) {
      return found.description || found.name || found.tag_name;
    }
    
    return FALLBACK_TAG_MAP[numId] || `Tag ${numId}`;
  }).filter(Boolean);
};
