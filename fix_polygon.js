const fs = require('fs');
let content = fs.readFileSync('src/app/search/farmlanddetails/MediaHub.tsx', 'utf8');

const oldLogic = `  let parsedPolygon = undefined;
  if (polygon) {
    if (polygon.type === "Polygon" && Array.isArray(polygon.coordinates)) {
      const coords = polygon.coordinates[0];
      if (Array.isArray(coords)) {
        parsedPolygon = coords.map((c: any) => ({ lat: parseFloat(c[1]), lng: parseFloat(c[0]) }));
      }
    } else if (Array.isArray(polygon)) {
      parsedPolygon = polygon;
    } else if (typeof polygon === "string") {
      try {
        const parsed = JSON.parse(polygon);
        if (Array.isArray(parsed)) {
          parsedPolygon = parsed;
        } else if (parsed.type === "Polygon" && Array.isArray(parsed.coordinates)) {
          const coords = parsed.coordinates[0];
          if (Array.isArray(coords)) {
            parsedPolygon = coords.map((c: any) => ({ lat: parseFloat(c[1]), lng: parseFloat(c[0]) }));
          }
        }
      } catch (e) {
        console.error("Failed to parse polygon", e);
      }
    }
  }`;

const newLogic = `  let parsedPolygon = undefined;
  if (polygon) {
    const parseGeoJSONPolygon = (obj: any) => {
      if (obj?.type === "Polygon" && Array.isArray(obj.coordinates)) {
        const coords = obj.coordinates[0];
        if (Array.isArray(coords)) {
          return coords.map((c: any) => ({ lat: parseFloat(c[1]), lng: parseFloat(c[0]) }));
        }
      }
      return null;
    };

    if (typeof polygon === "string") {
      try {
        const parsed = JSON.parse(polygon);
        if (Array.isArray(parsed)) {
          parsedPolygon = parseGeoJSONPolygon(parsed[0]) || parsed;
        } else {
          parsedPolygon = parseGeoJSONPolygon(parsed);
        }
      } catch (e) {
        console.error("Failed to parse polygon", e);
      }
    } else if (Array.isArray(polygon)) {
      parsedPolygon = parseGeoJSONPolygon(polygon[0]) || polygon;
    } else {
      parsedPolygon = parseGeoJSONPolygon(polygon);
    }
  }`;

content = content.replace(oldLogic, newLogic);
fs.writeFileSync('src/app/search/farmlanddetails/MediaHub.tsx', content);
